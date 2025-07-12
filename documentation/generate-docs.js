#!/usr/bin/env node

/**
 * NEIS Documentation Generator
 * 
 * This script generates comprehensive documentation files for the NEIS system.
 * It creates hundreds of individual markdown files covering all aspects of the application.
 */

const fs = require('fs');
const path = require('path');

// Documentation templates and structure
const docsStructure = {
  // Architecture Documentation
  'architecture': {
    'project-overview.md': require('./templates/architecture/project-overview'),
    'technology-stack.md': require('./templates/architecture/technology-stack'),
    'project-structure.md': require('./templates/architecture/project-structure'),
    'development-setup.md': require('./templates/architecture/development-setup'),
    'deployment-guide.md': require('./templates/architecture/deployment-guide'),
    'security-architecture.md': require('./templates/architecture/security-architecture'),
    'performance-optimization.md': require('./templates/architecture/performance-optimization'),
    'scalability-strategy.md': require('./templates/architecture/scalability-strategy'),
    'monitoring-and-logging.md': require('./templates/architecture/monitoring-and-logging'),
    'disaster-recovery.md': require('./templates/architecture/disaster-recovery'),
  },

  // Component Documentation
  'components': {
    'component-library-overview.md': require('./templates/components/component-library-overview'),
    'radix-ui-components.md': require('./templates/components/radix-ui-components'),
    'custom-components.md': require('./templates/components/custom-components'),
    'theme-system.md': require('./templates/components/theme-system'),
    'styling-guidelines.md': require('./templates/components/styling-guidelines'),
    'accessibility-guidelines.md': require('./templates/components/accessibility-guidelines'),
    'responsive-design.md': require('./templates/components/responsive-design'),
    'animation-guidelines.md': require('./templates/components/animation-guidelines'),
    'icon-system.md': require('./templates/components/icon-system'),
    'color-system.md': require('./templates/components/color-system'),
  },

  // UI Components Documentation
  'ui-components': {
    'accordion.md': require('./templates/ui-components/accordion'),
    'alert.md': require('./templates/ui-components/alert'),
    'alert-dialog.md': require('./templates/ui-components/alert-dialog'),
    'aspect-ratio.md': require('./templates/ui-components/aspect-ratio'),
    'avatar.md': require('./templates/ui-components/avatar'),
    'badge.md': require('./templates/ui-components/badge'),
    'breadcrumb.md': require('./templates/ui-components/breadcrumb'),
    'button.md': require('./templates/ui-components/button'),
    'calendar.md': require('./templates/ui-components/calendar'),
    'card.md': require('./templates/ui-components/card'),
    'carousel.md': require('./templates/ui-components/carousel'),
    'chart.md': require('./templates/ui-components/chart'),
    'checkbox.md': require('./templates/ui-components/checkbox'),
    'collapsible.md': require('./templates/ui-components/collapsible'),
    'command.md': require('./templates/ui-components/command'),
    'context-menu.md': require('./templates/ui-components/context-menu'),
    'dialog.md': require('./templates/ui-components/dialog'),
    'drawer.md': require('./templates/ui-components/drawer'),
    'dropdown-menu.md': require('./templates/ui-components/dropdown-menu'),
    'form.md': require('./templates/ui-components/form'),
    'hover-card.md': require('./templates/ui-components/hover-card'),
    'input.md': require('./templates/ui-components/input'),
    'input-otp.md': require('./templates/ui-components/input-otp'),
    'label.md': require('./templates/ui-components/label'),
    'menubar.md': require('./templates/ui-components/menubar'),
    'navigation-menu.md': require('./templates/ui-components/navigation-menu'),
    'pagination.md': require('./templates/ui-components/pagination'),
    'popover.md': require('./templates/ui-components/popover'),
    'progress.md': require('./templates/ui-components/progress'),
    'radio-group.md': require('./templates/ui-components/radio-group'),
    'resizable.md': require('./templates/ui-components/resizable'),
    'scroll-area.md': require('./templates/ui-components/scroll-area'),
    'select.md': require('./templates/ui-components/select'),
    'separator.md': require('./templates/ui-components/separator'),
    'sheet.md': require('./templates/ui-components/sheet'),
    'sidebar.md': require('./templates/ui-components/sidebar'),
    'skeleton.md': require('./templates/ui-components/skeleton'),
    'slider.md': require('./templates/ui-components/slider'),
    'sonner.md': require('./templates/ui-components/sonner'),
    'switch.md': require('./templates/ui-components/switch'),
    'table.md': require('./templates/ui-components/table'),
    'tabs.md': require('./templates/ui-components/tabs'),
    'textarea.md': require('./templates/ui-components/textarea'),
    'toast.md': require('./templates/ui-components/toast'),
    'toaster.md': require('./templates/ui-components/toaster'),
    'toggle.md': require('./templates/ui-components/toggle'),
    'toggle-group.md': require('./templates/ui-components/toggle-group'),
    'tooltip.md': require('./templates/ui-components/tooltip'),
  },

  // Pages Documentation
  'pages': {
    'page-structure.md': require('./templates/pages/page-structure'),
    'authentication-pages.md': require('./templates/pages/authentication-pages'),
    'dashboard-pages.md': require('./templates/pages/dashboard-pages'),
    'public-pages.md': require('./templates/pages/public-pages'),
    'video-session.md': require('./templates/pages/video-session'),
    'home-page.md': require('./templates/pages/home-page'),
    'about-page.md': require('./templates/pages/about-page'),
    'contact-page.md': require('./templates/pages/contact-page'),
    'resources-page.md': require('./templates/pages/resources-page'),
    'login-page.md': require('./templates/pages/login-page'),
    'register-page.md': require('./templates/pages/register-page'),
    'get-started-page.md': require('./templates/pages/get-started-page'),
    'user-dashboard-page.md': require('./templates/pages/user-dashboard-page'),
    'practitioner-dashboard-page.md': require('./templates/pages/practitioner-dashboard-page'),
    'supervisor-dashboard-page.md': require('./templates/pages/supervisor-dashboard-page'),
    'admin-dashboard-page.md': require('./templates/pages/admin-dashboard-page'),
  },

  // Configuration Documentation
  'configuration': {
    'nextjs-config.md': require('./templates/configuration/nextjs-config'),
    'tailwind-config.md': require('./templates/configuration/tailwind-config'),
    'typescript-config.md': require('./templates/configuration/typescript-config'),
    'postcss-config.md': require('./templates/configuration/postcss-config'),
    'eslint-config.md': require('./templates/configuration/eslint-config'),
    'prettier-config.md': require('./templates/configuration/prettier-config'),
    'jest-config.md': require('./templates/configuration/jest-config'),
    'playwright-config.md': require('./templates/configuration/playwright-config'),
    'vercel-config.md': require('./templates/configuration/vercel-config'),
    'docker-config.md': require('./templates/configuration/docker-config'),
  },

  // Development Documentation
  'development': {
    'development-workflow.md': require('./templates/development/development-workflow'),
    'code-standards.md': require('./templates/development/code-standards'),
    'testing-guidelines.md': require('./templates/development/testing-guidelines'),
    'performance-optimization.md': require('./templates/development/performance-optimization'),
    'debugging-guide.md': require('./templates/development/debugging-guide'),
    'code-review-process.md': require('./templates/development/code-review-process'),
    'git-workflow.md': require('./templates/development/git-workflow'),
    'branching-strategy.md': require('./templates/development/branching-strategy'),
    'release-process.md': require('./templates/development/release-process'),
    'hotfix-procedure.md': require('./templates/development/hotfix-procedure'),
  },

  // Dependencies Documentation
  'dependencies': {
    'package-dependencies.md': require('./templates/dependencies/package-dependencies'),
    'dev-dependencies.md': require('./templates/dependencies/dev-dependencies'),
    'ui-dependencies.md': require('./templates/dependencies/ui-dependencies'),
    'form-dependencies.md': require('./templates/dependencies/form-dependencies'),
    'chart-dependencies.md': require('./templates/dependencies/chart-dependencies'),
    'icon-dependencies.md': require('./templates/dependencies/icon-dependencies'),
    'animation-dependencies.md': require('./templates/dependencies/animation-dependencies'),
    'validation-dependencies.md': require('./templates/dependencies/validation-dependencies'),
    'theme-dependencies.md': require('./templates/dependencies/theme-dependencies'),
    'testing-dependencies.md': require('./templates/dependencies/testing-dependencies'),
  },

  // Features Documentation
  'features': {
    'authentication-system.md': require('./templates/features/authentication-system'),
    'dashboard-features.md': require('./templates/features/dashboard-features'),
    'video-session-features.md': require('./templates/features/video-session-features'),
    'language-support.md': require('./templates/features/language-support'),
    'theme-support.md': require('./templates/features/theme-support'),
    'accessibility-features.md': require('./templates/features/accessibility-features'),
    'responsive-features.md': require('./templates/features/responsive-features'),
    'offline-support.md': require('./templates/features/offline-support'),
    'notification-system.md': require('./templates/features/notification-system'),
    'analytics-features.md': require('./templates/features/analytics-features'),
  },

  // API Documentation
  'api': {
    'api-overview.md': require('./templates/api/api-overview'),
    'authentication-api.md': require('./templates/api/authentication-api'),
    'user-api.md': require('./templates/api/user-api'),
    'session-api.md': require('./templates/api/session-api'),
    'resource-api.md': require('./templates/api/resource-api'),
    'analytics-api.md': require('./templates/api/analytics-api'),
    'notification-api.md': require('./templates/api/notification-api'),
    'file-upload-api.md': require('./templates/api/file-upload-api'),
    'webhook-api.md': require('./templates/api/webhook-api'),
    'health-check-api.md': require('./templates/api/health-check-api'),
  },

  // Security Documentation
  'security': {
    'security-overview.md': require('./templates/security/security-overview'),
    'authentication-security.md': require('./templates/security/authentication-security'),
    'data-protection.md': require('./templates/security/data-protection'),
    'privacy-compliance.md': require('./templates/security/privacy-compliance'),
    'encryption-standards.md': require('./templates/security/encryption-standards'),
    'session-management.md': require('./templates/security/session-management'),
    'input-validation.md': require('./templates/security/input-validation'),
    'xss-prevention.md': require('./templates/security/xss-prevention'),
    'csrf-protection.md': require('./templates/security/csrf-protection'),
    'rate-limiting.md': require('./templates/security/rate-limiting'),
  },

  // Testing Documentation
  'testing': {
    'testing-overview.md': require('./templates/testing/testing-overview'),
    'unit-testing.md': require('./templates/testing/unit-testing'),
    'integration-testing.md': require('./templates/testing/integration-testing'),
    'e2e-testing.md': require('./templates/testing/e2e-testing'),
    'accessibility-testing.md': require('./templates/testing/accessibility-testing'),
    'performance-testing.md': require('./templates/testing/performance-testing'),
    'security-testing.md': require('./templates/testing/security-testing'),
    'visual-regression-testing.md': require('./templates/testing/visual-regression-testing'),
    'load-testing.md': require('./templates/testing/load-testing'),
    'test-data-management.md': require('./templates/testing/test-data-management'),
  },

  // Deployment Documentation
  'deployment': {
    'deployment-overview.md': require('./templates/deployment/deployment-overview'),
    'vercel-deployment.md': require('./templates/deployment/vercel-deployment'),
    'docker-deployment.md': require('./templates/deployment/docker-deployment'),
    'environment-setup.md': require('./templates/deployment/environment-setup'),
    'ci-cd-pipeline.md': require('./templates/deployment/ci-cd-pipeline'),
    'monitoring-setup.md': require('./templates/deployment/monitoring-setup'),
    'backup-strategy.md': require('./templates/deployment/backup-strategy'),
    'rollback-procedure.md': require('./templates/deployment/rollback-procedure'),
    'ssl-certificate-setup.md': require('./templates/deployment/ssl-certificate-setup'),
    'cdn-configuration.md': require('./templates/deployment/cdn-configuration'),
  },

  // Maintenance Documentation
  'maintenance': {
    'maintenance-overview.md': require('./templates/maintenance/maintenance-overview'),
    'upgrade-procedures.md': require('./templates/maintenance/upgrade-procedures'),
    'backup-procedures.md': require('./templates/maintenance/backup-procedures'),
    'monitoring-procedures.md': require('./templates/maintenance/monitoring-procedures'),
    'troubleshooting-guide.md': require('./templates/maintenance/troubleshooting-guide'),
    'performance-monitoring.md': require('./templates/maintenance/performance-monitoring'),
    'security-monitoring.md': require('./templates/maintenance/security-monitoring'),
    'log-analysis.md': require('./templates/maintenance/log-analysis'),
    'database-maintenance.md': require('./templates/maintenance/database-maintenance'),
    'system-updates.md': require('./templates/maintenance/system-updates'),
  },

  // User Guide Documentation
  'user-guide': {
    'user-guide-overview.md': require('./templates/user-guide/user-guide-overview'),
    'getting-started.md': require('./templates/user-guide/getting-started'),
    'user-dashboard-guide.md': require('./templates/user-guide/user-dashboard-guide'),
    'practitioner-guide.md': require('./templates/user-guide/practitioner-guide'),
    'supervisor-guide.md': require('./templates/user-guide/supervisor-guide'),
    'admin-guide.md': require('./templates/user-guide/admin-guide'),
    'video-session-guide.md': require('./templates/user-guide/video-session-guide'),
    'resource-library-guide.md': require('./templates/user-guide/resource-library-guide'),
    'accessibility-guide.md': require('./templates/user-guide/accessibility-guide'),
    'troubleshooting-guide.md': require('./templates/user-guide/troubleshooting-guide'),
  },

  // Contributing Documentation
  'contributing': {
    'contributing-overview.md': require('./templates/contributing/contributing-overview'),
    'development-setup.md': require('./templates/contributing/development-setup'),
    'code-of-conduct.md': require('./templates/contributing/code-of-conduct'),
    'pull-request-process.md': require('./templates/contributing/pull-request-process'),
    'issue-reporting.md': require('./templates/contributing/issue-reporting'),
    'feature-requests.md': require('./templates/contributing/feature-requests'),
    'bug-reports.md': require('./templates/contributing/bug-reports'),
    'documentation-contributing.md': require('./templates/contributing/documentation-contributing'),
    'testing-contributing.md': require('./templates/contributing/testing-contributing'),
    'translation-contributing.md': require('./templates/contributing/translation-contributing'),
  },
};

// Generate documentation files
function generateDocumentation() {
  console.log('🚀 Starting NEIS documentation generation...');
  
  let totalFiles = 0;
  
  // Create base documentation directory
  const docsDir = path.join(__dirname);
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }
  
  // Generate files for each category
  Object.entries(docsStructure).forEach(([category, files]) => {
    const categoryDir = path.join(docsDir, category);
    
    // Create category directory
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }
    
    // Generate files in category
    Object.entries(files).forEach(([filename, content]) => {
      const filePath = path.join(categoryDir, filename);
      
      try {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Generated: ${category}/${filename}`);
        totalFiles++;
      } catch (error) {
        console.error(`❌ Error generating ${category}/${filename}:`, error.message);
      }
    });
  });
  
  console.log(`\n🎉 Documentation generation complete!`);
  console.log(`📊 Total files generated: ${totalFiles}`);
  console.log(`📁 Documentation location: ${docsDir}`);
  
  // Generate index file
  generateIndexFile(docsDir, totalFiles);
}

// Generate index file
function generateIndexFile(docsDir, totalFiles) {
  const indexContent = `# NEIS Documentation Index

## 📚 Complete Documentation Library

This documentation contains **${totalFiles} individual files** covering every aspect of the NEIS system.

### 📁 Documentation Structure

${Object.keys(docsStructure).map(category => {
  const categoryFiles = Object.keys(docsStructure[category]);
  return `#### ${category.charAt(0).toUpperCase() + category.slice(1)} (${categoryFiles.length} files)
${categoryFiles.map(file => `- [${file.replace('.md', '')}](./${category}/${file})`).join('\n')}`;
}).join('\n\n')}

### 🔍 Quick Navigation

- **🏗️ Architecture**: System design and technical overview
- **🎨 Components**: UI component library and design system
- **📱 Pages**: Application pages and routing
- **🔧 Configuration**: Build and deployment configuration
- **🛠️ Development**: Development workflow and guidelines
- **📦 Dependencies**: Package management and dependencies
- **🎯 Features**: Application features and functionality
- **🔌 API**: API documentation and endpoints
- **🛡️ Security**: Security measures and compliance
- **🧪 Testing**: Testing strategies and procedures
- **🚀 Deployment**: Deployment and infrastructure
- **🔧 Maintenance**: System maintenance and monitoring
- **👥 User Guide**: End-user documentation
- **🤝 Contributing**: Contribution guidelines

### 📖 How to Use This Documentation

1. **For Developers**: Start with [Development Setup](./contributing/development-setup.md)
2. **For Designers**: Focus on [Component Library](./components/component-library-overview.md)
3. **For DevOps**: See [Deployment Guide](./deployment/deployment-overview.md)
4. **For Users**: Review [User Guide](./user-guide/user-guide-overview.md)

### 🔄 Documentation Updates

This documentation is automatically generated and updated based on the codebase structure. Each component, page, and configuration file has its own dedicated documentation file.

### 📞 Support

For questions about this documentation or the NEIS system, please refer to the specific documentation files or contact the development team.

---

*Last updated: ${new Date().toISOString()}*
*Total documentation files: ${totalFiles}*
*Documentation version: 1.0.0*
`;

  const indexPath = path.join(docsDir, 'INDEX.md');
  fs.writeFileSync(indexPath, indexContent);
  console.log(`📋 Generated index file: INDEX.md`);
}

// Run the generator
if (require.main === module) {
  generateDocumentation();
}

module.exports = { generateDocumentation, docsStructure }; 