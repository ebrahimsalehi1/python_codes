
# ❌ Bad example
# Too vague + wrong base class for normal app errors.
class ProblemHappened(BaseException):
    pass

# ✅ Good example
# Clear hierarchy: easy to catch broad or specific errors.
class AppError(Exception):
    pass

class ConfigError(AppError):
    pass

class MissingKeyError(ConfigError):
    pass

class InvalidValueError(ConfigError):
    pass