# Contributing to Plankton

Thank you for your interest in contributing to Plankton! This document outlines the guidelines and processes for contributing to the project.

## Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.11+
- PostgreSQL 14+
- Redis 7+
- Git

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/plankton.git
   cd plankton
   ```

2. **Install Dependencies**
   ```bash
   npm install
   pip install -r requirements.txt
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   # Configure your environment variables
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## Development Workflow

### Branching Strategy
- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - Feature development branches
- `bugfix/*` - Bug fix branches
- `release/*` - Release preparation branches

### Commit Messages
We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style/formatting
- `refactor` - Code refactoring
- `test` - Test-related changes
- `chore` - Build/auxiliary tool changes

**Examples:**
```
feat: add agent marketplace functionality
fix: resolve token overflow issue
docs: update installation instructions
```

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow coding standards
   - Add/update tests
   - Update documentation

3. **Test Your Changes**
   ```bash
   npm test
   npm run lint
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: description of your changes"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   # Create PR on GitHub
   ```

6. **PR Requirements**
   - Clear description of changes
   - Reference related issues
   - Include screenshots if applicable
   - Ensure CI checks pass

## Coding Standards

### TypeScript/JavaScript
- Use TypeScript for type safety
- Follow ESLint configuration
- Use meaningful variable names
- Add comments for complex logic

### React Components
- Use functional components with hooks
- Follow component naming conventions
- Implement proper error boundaries
- Use React.memo for performance optimization

### CSS/Tailwind
- Use Tailwind utility classes
- Follow BEM naming for custom CSS
- Ensure responsive design
- Test dark mode compatibility

### Backend (Python)
- Follow PEP 8 guidelines
- Use type hints
- Implement proper error handling
- Add comprehensive docstrings

## Testing

### Frontend Testing
- Unit tests with Jest and React Testing Library
- Component testing
- Integration testing

### Backend Testing
- Unit tests with pytest
- API endpoint testing
- Database testing

### Running Tests
```bash
# Frontend
npm test
npm run test:watch

# Backend
pytest
pytest --watch
```

## Documentation

- Update README.md for major changes
- Add inline code documentation
- Update API documentation
- Include setup instructions for new features

## Security

- Report security vulnerabilities privately
- Follow security best practices
- Regular dependency updates
- Input validation and sanitization

## Community

- Join our Discord server for discussions
- Follow our GitHub discussions
- Attend community calls
- Help other contributors

## License

By contributing to Plankton, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to reach out:
- Create a GitHub issue
- Join our Discord community
- Email: dmitry@borealdrive.dev

---

Thank you for contributing to Plankton! 🦞