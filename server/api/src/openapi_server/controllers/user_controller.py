import connexion
import six

from openapi_server.models.user import User  # noqa: E501
from openapi_server import util


def create_user(body):  # noqa: E501
    """Create user

    This can only be done by the logged in user. # noqa: E501

    :param body: Created user object
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = User.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def get_user():  # noqa: E501
    """Get current user

    Provides info about the logged in user. # noqa: E501


    :rtype: User
    """
    return 'do some magic!'


def login_user(email, password):  # noqa: E501
    """Logs user into the system

     # noqa: E501

    :param email: The user name for login
    :type email: str
    :param password: The password for login in clear text
    :type password: str

    :rtype: None
    """
    return 'do some magic!'


def logout_user():  # noqa: E501
    """Logs out current logged in user session

     # noqa: E501


    :rtype: None
    """
    return 'do some magic!'
