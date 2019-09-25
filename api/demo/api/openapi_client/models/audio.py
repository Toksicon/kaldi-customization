# coding: utf-8

"""
    Kaldi Customization Server

    Kaldi Customization Server.  # noqa: E501

    The version of the OpenAPI document: 1.1.0
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class Audio(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'uuid': 'str',
        'name': 'str',
        'creation_timestamp': 'datetime',
        'status': 'AudioStatus'
    }

    attribute_map = {
        'uuid': 'uuid',
        'name': 'name',
        'creation_timestamp': 'creation_timestamp',
        'status': 'status'
    }

    def __init__(self, uuid=None, name=None, creation_timestamp=None, status=None):  # noqa: E501
        """Audio - a model defined in OpenAPI"""  # noqa: E501

        self._uuid = None
        self._name = None
        self._creation_timestamp = None
        self._status = None
        self.discriminator = None

        self.uuid = uuid
        self.name = name
        if creation_timestamp is not None:
            self.creation_timestamp = creation_timestamp
        self.status = status

    @property
    def uuid(self):
        """Gets the uuid of this Audio.  # noqa: E501


        :return: The uuid of this Audio.  # noqa: E501
        :rtype: str
        """
        return self._uuid

    @uuid.setter
    def uuid(self, uuid):
        """Sets the uuid of this Audio.


        :param uuid: The uuid of this Audio.  # noqa: E501
        :type: str
        """
        if uuid is None:
            raise ValueError("Invalid value for `uuid`, must not be `None`")  # noqa: E501

        self._uuid = uuid

    @property
    def name(self):
        """Gets the name of this Audio.  # noqa: E501


        :return: The name of this Audio.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this Audio.


        :param name: The name of this Audio.  # noqa: E501
        :type: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def creation_timestamp(self):
        """Gets the creation_timestamp of this Audio.  # noqa: E501


        :return: The creation_timestamp of this Audio.  # noqa: E501
        :rtype: datetime
        """
        return self._creation_timestamp

    @creation_timestamp.setter
    def creation_timestamp(self, creation_timestamp):
        """Sets the creation_timestamp of this Audio.


        :param creation_timestamp: The creation_timestamp of this Audio.  # noqa: E501
        :type: datetime
        """

        self._creation_timestamp = creation_timestamp

    @property
    def status(self):
        """Gets the status of this Audio.  # noqa: E501


        :return: The status of this Audio.  # noqa: E501
        :rtype: AudioStatus
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this Audio.


        :param status: The status of this Audio.  # noqa: E501
        :type: AudioStatus
        """
        if status is None:
            raise ValueError("Invalid value for `status`, must not be `None`")  # noqa: E501

        self._status = status

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, Audio):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
