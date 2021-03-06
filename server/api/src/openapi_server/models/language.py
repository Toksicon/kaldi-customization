# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class Language(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, name=None):  # noqa: E501
        """Language - a model defined in OpenAPI

        :param id: The id of this Language.  # noqa: E501
        :type id: int
        :param name: The name of this Language.  # noqa: E501
        :type name: str
        """
        self.openapi_types = {
            'id': int,
            'name': str
        }

        self.attribute_map = {
            'id': 'id',
            'name': 'name'
        }

        self._id = id
        self._name = name

    @classmethod
    def from_dict(cls, dikt) -> 'Language':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Language of this Language.  # noqa: E501
        :rtype: Language
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this Language.


        :return: The id of this Language.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Language.


        :param id: The id of this Language.
        :type id: int
        """

        self._id = id

    @property
    def name(self):
        """Gets the name of this Language.


        :return: The name of this Language.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this Language.


        :param name: The name of this Language.
        :type name: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name
