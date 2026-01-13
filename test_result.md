#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

user_problem_statement: |
  Site web B2B SaaS pour BureauWeb.ca - infrastructure web pour entrepreneurs québécois en travaux manuels.
  Site one-page en français québécois avec sections hero, tarifs, formulaire de capture, conformité Loi 25.
  Palette: Navy Blue (#0f172a), Concrete Grey (#64748b), Safety Orange (#f97316)
  Framework: Next.js 14 + Tailwind CSS + shadcn/ui

backend:
  - task: "API Lead Capture - POST /api/lead"
    implemented: true
    working: true
    file: "/app/app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: true
        agent: "main"
        comment: "API fonctionnelle, validation secteur/region/telephone, retourne JSON avec leadId"

frontend:
  - task: "Navigation smooth scroll"
    implemented: true
    working: "NA"
    file: "/app/components/layout/Header.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Navigation avec liens anchor vers #forfaits, #processus, #conformite, #contact"

  - task: "Sticky header avec téléphone"
    implemented: true
    working: "NA"
    file: "/app/components/layout/Header.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Header fixed avec backdrop-blur, téléphone 514-XXX-XXXX cliquable, bouton Démarrer mon projet"

  - task: "Formulaire de capture Lead"
    implemented: true
    working: "NA"
    file: "/app/components/forms/LeadForm.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Formulaire avec dropdowns secteur/région, validation téléphone, champs optionnels courriel/site web"

  - task: "Responsive design mobile"
    implemented: true
    working: "NA"
    file: "/app/app/page.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Mobile-first avec Tailwind, breakpoints sm/md/lg, menu hamburger sur mobile"

  - task: "Hero section"
    implemented: true
    working: "NA"
    file: "/app/components/sections/Hero.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Hero avec image plans de construction, CTAs, cartes flottantes 21 jours et Tout inclus"

  - task: "Section Forfaits/Prix"
    implemented: true
    working: "NA"
    file: "/app/components/sections/Pricing.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "2 cartes forfaits (Essentiel 399$/mois, Croissance 599$/mois), modalités, disclaimer"

  - task: "Section Processus timeline"
    implemented: true
    working: "NA"
    file: "/app/components/sections/Process.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "4 étapes avec timeline, split Vous/Nous, warnings pour délais"

  - task: "Footer avec informations légales"
    implemented: true
    working: "NA"
    file: "/app/components/layout/Footer.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "4 colonnes: Brand, Contact, Légal, Partenaires + mentions NEQ/TPS-TVQ"

  - task: "Langue française 100%"
    implemented: true
    working: "NA"
    file: "/app/app/layout.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "html lang=fr-CA, meta tags français, alt texts français, messages erreur français"

metadata:
  created_by: "main_agent"
  version: "1.0"
  test_sequence: 1
  run_ui: true

test_plan:
  current_focus:
    - "Navigation smooth scroll"
    - "Formulaire de capture Lead"
    - "Responsive design mobile"
    - "Sticky header avec téléphone"
  stuck_tasks: []
  test_all: true
  test_priority: "high_first"

agent_communication:
  - agent: "main"
    message: |
      Site BureauWeb.ca complet implémenté en 5 phases.
      
      FICHIERS PRINCIPAUX:
      - /app/app/page.js - Page principale avec toutes les sections
      - /app/app/layout.js - Layout avec meta tags français
      - /app/app/api/[[...path]]/route.js - API lead capture
      - /app/components/layout/Header.js - Sticky header
      - /app/components/layout/Footer.js - Footer 4 colonnes
      - /app/components/sections/*.js - Toutes les sections
      - /app/components/forms/LeadForm.js - Formulaire de capture
      
      PRIORITÉS DE TEST:
      1. Navigation smooth scroll vers toutes les sections (#forfaits, #processus, #conformite, #contact)
      2. Formulaire de capture avec validation (téléphone requis, format validation)
      3. Responsive mobile (60%+ trafic attendu) - CRITIQUE
      4. Sticky header avec téléphone cliquable
      5. CTAs fonctionnels
      
      API ENDPOINT DÉJÀ TESTÉ:
      - POST /api/lead - fonctionne avec validation
      
      NOTE: Site vitrine, pas de backend complexe. Focus sur UX/UI et responsive.