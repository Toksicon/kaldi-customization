# coding: utf-8

"""
    Kaldi Customization Server

    Kaldi Customization Server.  # noqa: E501

    The version of the OpenAPI document: 1.1.0
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import openapi_client
from openapi_client.api.logging_api import LoggingApi  # noqa: E501
from openapi_client.rest import ApiException


class TestLoggingApi(unittest.TestCase):
    """LoggingApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.logging_api.LoggingApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_decode_session_log(self):
        """Test case for get_decode_session_log

        Get decode session  # noqa: E501
        """
        pass

    def test_get_perparation_log(self):
        """Test case for get_perparation_log

        Get Preparation Log  # noqa: E501
        """
        pass

    def test_get_resource_log(self):
        """Test case for get_resource_log

        Find resource by UUID  # noqa: E501
        """
        pass

    def test_get_training_log(self):
        """Test case for get_training_log

        Get Training Log  # noqa: E501
        """
        pass

    def test_get_training_stats(self):
        """Test case for get_training_stats

        Get Training Stats  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
