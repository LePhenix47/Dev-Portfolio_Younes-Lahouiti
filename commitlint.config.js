const MIN_CHARACTERS = 2;
const MAX_CHARACTERS = 500;

module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "header-max-length": [MIN_CHARACTERS, "always", MAX_CHARACTERS], // Maximum 305 characters for the subject
    "body-max-line-length": [MIN_CHARACTERS, "always", MAX_CHARACTERS], // Maximum 300 characters per line in the body
  },
  prompt: {
    messages: {
      skip: ":skip",
      max: "not more than %d characters",
      min: "at least %d characters",
      emptyWarning: "cannot be empty",
      upperLimitWarning: "above the limit",
      lowerLimitWarning: "below the limit",
    },
    questions: {
      type: {
        description: "Choose the type of change for your commit:",
        enum: {
          feat: {
            description: "Adding or updating a feature",
            title: "Features",
            emoji: "✨",
          },
          fix: {
            description: "Fixing a bug",
            title: "Bug Fixes",
            emoji: "🐞",
          },
          docs: {
            description: "Adding or updating documentation",
            title: "Documentation",
            emoji: "📚",
          },
          style: {
            description: "Addition of SASS style",
            title: "Styles",
            emoji: "💎",
          },
          refactor: {
            description:
              "Code changes that neither fix a bug nor add a feature",
            title: "Code Refactoring",
            emoji: "📦",
          },
          perf: {
            description: "Improving performance",
            title: "Performance Improvements",
            emoji: "🚀",
          },
          test: {
            description: "Adding or fixing tests",
            title: "Tests",
            emoji: "🚨",
          },
          build: {
            description:
              "Changes that affect the build system or external dependencies (e.g., webpack, npm)",
            title: "Builds",
            emoji: "🛠",
          },
          ci: {
            description:
              "Changes to the CI configuration or scripts (i.e: package.json, .gitignore, next.config.js... )",
            title: "Continuous Integrations",
            emoji: "⚙️",
          },
          revert: {
            description: "Reverting a previous commit",
            title: "Revert",
            emoji: "🗑",
          },
        },
      },
      scope: {
        description: "Which components were changed ?",
      },
      subject: {
        description: "Write a concise description in the imperative mood",
      },
      body: {
        description: "Provide a more detailed description of the changes",
      },
      isBreaking: {
        description: "Are there any breaking changes?",
      },
      breakingBody: {
        description:
          "A breaking change requires a body in the commit message. Please provide a longer and more detailed description than the first line of the commit.",
      },
      breaking: {
        description: "Describe the breaking changes",
      },
      isIssueAffected: {
        description: "Does this commit affect an existing issue?",
      },
      issuesBody: {
        description:
          "If this commit resolves any issues, you must add a body to the commit message. Please provide a longer and more detailed description than the first line of the commit.",
      },
      issues: {
        description:
          'Add a reference to the related issue ("fix #123", "ref #123")',
      },
    },
  },
};
