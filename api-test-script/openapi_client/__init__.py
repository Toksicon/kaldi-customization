# coding: utf-8

# flake8: noqa

"""
    Kaldi Customization Server

    Kaldi Customization Server.  # noqa: E501

    The version of the OpenAPI document: 1.0.2
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

__version__ = "1.0.0"

# import apis into sdk package
from openapi_client.api.decode_api import DecodeApi
from openapi_client.api.global_api import GlobalApi
from openapi_client.api.project_api import ProjectApi
from openapi_client.api.resource_api import ResourceApi
from openapi_client.api.training_api import TrainingApi
from openapi_client.api.user_api import UserApi

# import ApiClient
from openapi_client.api_client import ApiClient
from openapi_client.configuration import Configuration
from openapi_client.exceptions import OpenApiException
from openapi_client.exceptions import ApiTypeError
from openapi_client.exceptions import ApiValueError
from openapi_client.exceptions import ApiKeyError
from openapi_client.exceptions import ApiException
# import models into sdk package
from openapi_client.models.acoustic_model import AcousticModel
from openapi_client.models.acoustic_model_type import AcousticModelType
from openapi_client.models.binary_decode_object import BinaryDecodeObject
from openapi_client.models.binary_resource_object import BinaryResourceObject
from openapi_client.models.create_project_object import CreateProjectObject
from openapi_client.models.decode_message import DecodeMessage
from openapi_client.models.decode_task_reference import DecodeTaskReference
from openapi_client.models.language import Language
from openapi_client.models.project import Project
from openapi_client.models.resource import Resource
from openapi_client.models.resource_reference_object import ResourceReferenceObject
from openapi_client.models.resource_status import ResourceStatus
from openapi_client.models.resource_type import ResourceType
from openapi_client.models.training import Training
from openapi_client.models.training_status import TrainingStatus
from openapi_client.models.user import User
