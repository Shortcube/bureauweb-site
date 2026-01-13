const nextConfig = {
  output: 'standalone',
  
  // Images optimisées (ACTIVÉ)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  experimental: {
    serverComponentsExternalPackages: ['mongodb'],
  },
  
  webpack(config, { dev }) {
    if (dev) {
      config.watchOptions = {
        poll: 2000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules'],
      };
    }
    return config;
  },
  
  onDemandEntries: {
    maxInactiveAge: 10000,
    pagesBufferLength: 2,
  },
  
  // Headers de sécurité CORRIGÉS
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Protection contre le clickjacking
          { 
            key: "X-Frame-Options", 
            value: "SAMEORIGIN" 
          },
          
          // Protection MIME type sniffing
          { 
            key: "X-Content-Type-Options", 
            value: "nosniff" 
          },
          
          // Protection XSS
          { 
            key: "X-XSS-Protection", 
            value: "1; mode=block" 
          },
          
          // Politique de référent
          { 
            key: "Referrer-Policy", 
            value: "strict-origin-when-cross-origin" 
          },
          
          // Permissions restreintes
          { 
            key: "Permissions-Policy", 
            value: "camera=(), microphone=(), geolocation=()" 
          },
          
          // Content Security Policy
          { 
            key: "Content-Security-Policy", 
            value: [
              "frame-ancestors 'self'",
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://api.resend.com"
            ].join("; ")
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
