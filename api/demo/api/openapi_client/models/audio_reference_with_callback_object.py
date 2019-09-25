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


class AudioReferenceWithCallbackObject(object):
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
        'audio_uuid': 'str',
        'callback': 'str'
    }

    attribute_map = {
        'audio_uuid': 'audio_uuid',
        'callback': 'callback'
    }

    def __init__(self, audio_uuid=None, callback=None):  # noqa: E501
        """AudioReferenceWithCallbackObject - a model defined in OpenAPI"""  # noqa: E501

        self._audio_uuid = None
        self._callback = None
        self.discriminator = None

        self.audio_uuid = audio_uuid
        if callback is not None:
            self.callback = callback

    @property
    def audio_uuid(self):
        """Gets the audio_uuid of this AudioReferenceWithCallbackObject.  # noqa: E501

        UUID of the audio file  # noqa: E501

        :return: The audio_uuid of this AudioReferenceWithCallbackObject.  # noqa: E501
        :rtype: str
        """
        return self._audio_uuid

    @audio_uuid.setter
    def audio_uuid(self, audio_uuid):
        """Sets the audio_uuid of this AudioReferenceWithCallbackObject.

        UUID of the audio file  # noqa: E501

        :param audio_uuid: The audio_uuid of this AudioReferenceWithCallbackObject.  # noqa: E501
        :type: str
        """
        if audio_uuid is None:
            raise ValueError("Invalid value for `audio_uuid`, must not be `None`")  # noqa: E501

        self._audio_uuid = audio_uuid

    @property
    def callback(self):
        """Gets the callback of this AudioReferenceWithCallbackObject.  # noqa: E501

        Callback URL when decoding finished  # noqa: E501

        :return: The callback of this AudioReferenceWithCallbackObject.  # noqa: E501
        :rtype: str
        """
        return self._callback

    @callback.setter
    def callback(self, callback):
        """Sets the callback of this AudioReferenceWithCallbackObject.

        Callback URL when decoding finished  # noqa: E501

        :param callback: The callback of this AudioReferenceWithCallbackObject.  # noqa: E501
        :type: str
        """

        self._callback = callback

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
        if not isinstance(other, AudioReferenceWithCallbackObject):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
