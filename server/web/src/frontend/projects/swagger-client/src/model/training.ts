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
import { Resource } from './resource';
import { TrainingStatus } from './trainingStatus';


export interface Training { 
    version?: number;
    creation_timestamp?: Date;
    status?: TrainingStatus;
    resources?: Array<Resource>;
}

