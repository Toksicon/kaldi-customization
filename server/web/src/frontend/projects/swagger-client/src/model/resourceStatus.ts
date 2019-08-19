/**
 * Kaldi Customization Server
 * Kaldi Customization Server.
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export type ResourceStatus = 0 | 1 | 9 | 10 | 11 | 12 | 13;

export const ResourceStatus = {
    Upload_InProgress: 0 as ResourceStatus,
    Upload_Failure: 1 as ResourceStatus,
    TextPreparation_Ready: 9 as ResourceStatus,
    TextPreparation_Pending: 10 as ResourceStatus,
    TextPreparation_InProcess: 11 as ResourceStatus,
    TextPreparation_Failure: 12 as ResourceStatus,
    TextPreparation_Success: 13 as ResourceStatus
};