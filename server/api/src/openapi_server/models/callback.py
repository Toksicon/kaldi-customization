# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server.models.callback_method import CallbackMethod
from openapi_server import util

from openapi_server.models.callback_method import CallbackMethod  # noqa: E501

class Callback(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, url=None, method=None):  # noqa: E501
        """Callback - a model defined in OpenAPI

        :param url: The url of this Callback.  # noqa: E501
        :type url: str
        :param method: The method of this Callback.  # noqa: E501
        :type method: CallbackMethod
        """
        self.openapi_types = {
            'url': str,
            'method': CallbackMethod
        }

        self.attribute_map = {
            'url': 'url',
            'method': 'method'
        }

        self._url = url
        self._method = method

    @classmethod
    def from_dict(cls, dikt) -> 'Callback':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Callback of this Callback.  # noqa: E501
        :rtype: Callback
        """
        return util.deserialize_model(dikt, cls)

    @property
    def url(self):
        """Gets the url of this Callback.

        The URL to be called  # noqa: E501

        :return: The url of this Callback.
        :rtype: str
        """
        return self._url

    @url.setter
    def url(self, url):
        """Sets the url of this Callback.

        The URL to be called  # noqa: E501

        :param url: The url of this Callback.
        :type url: str
        """
        if url is None:
            raise ValueError("Invalid value for `url`, must not be `None`")  # noqa: E501

        self._url = url

    @property
    def method(self):
        """Gets the method of this Callback.


        :return: The method of this Callback.
        :rtype: CallbackMethod
        """
        return self._method

    @method.setter
    def method(self, method):
        """Sets the method of this Callback.


        :param method: The method of this Callback.
        :type method: CallbackMethod
        """
        if method is None:
            raise ValueError("Invalid value for `method`, must not be `None`")  # noqa: E501

        self._method = method