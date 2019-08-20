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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Resource } from '../model/resource';
import { ResourceReferenceObject } from '../model/resourceReferenceObject';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

    protected basePath = 'http://localhost:8080/api/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Assign a resource to the training
     * Assign the specified resource to the training
     * @param project_uuid UUID of the project
     * @param training_version Training version of the project
     * @param resource_reference_object Resource that needs to be added
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assignResourceToTraining(project_uuid: string, training_version: number, resource_reference_object?: ResourceReferenceObject, observe?: 'body', reportProgress?: boolean): Observable<Resource>;
    public assignResourceToTraining(project_uuid: string, training_version: number, resource_reference_object?: ResourceReferenceObject, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Resource>>;
    public assignResourceToTraining(project_uuid: string, training_version: number, resource_reference_object?: ResourceReferenceObject, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Resource>>;
    public assignResourceToTraining(project_uuid: string, training_version: number, resource_reference_object?: ResourceReferenceObject, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (project_uuid === null || project_uuid === undefined) {
            throw new Error('Required parameter project_uuid was null or undefined when calling assignResourceToTraining.');
        }
        if (training_version === null || training_version === undefined) {
            throw new Error('Required parameter training_version was null or undefined when calling assignResourceToTraining.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Resource>(`${this.configuration.basePath}/project/${encodeURIComponent(String(project_uuid))}/training/${encodeURIComponent(String(training_version))}/resource`,
            resource_reference_object,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create/Upload a new resource
     * 
     * @param upfile File object that needs to be uploaded
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createResource(upfile: Blob, observe?: 'body', reportProgress?: boolean): Observable<Resource>;
    public createResource(upfile: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Resource>>;
    public createResource(upfile: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Resource>>;
    public createResource(upfile: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (upfile === null || upfile === undefined) {
            throw new Error('Required parameter upfile was null or undefined when calling createResource.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (upfile !== undefined) {
            formParams = formParams.append('upfile', <any>upfile) as any || formParams;
        }

        return this.httpClient.post<Resource>(`${this.configuration.basePath}/resource`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Remove a resource from the training
     * Removes the assigned resource from the training
     * @param project_uuid UUID of the project
     * @param training_version Training version of the project
     * @param resource_uuid UUID of the resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAssignedResourceFromTraining(project_uuid: string, training_version: number, resource_uuid: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteAssignedResourceFromTraining(project_uuid: string, training_version: number, resource_uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteAssignedResourceFromTraining(project_uuid: string, training_version: number, resource_uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteAssignedResourceFromTraining(project_uuid: string, training_version: number, resource_uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (project_uuid === null || project_uuid === undefined) {
            throw new Error('Required parameter project_uuid was null or undefined when calling deleteAssignedResourceFromTraining.');
        }
        if (training_version === null || training_version === undefined) {
            throw new Error('Required parameter training_version was null or undefined when calling deleteAssignedResourceFromTraining.');
        }
        if (resource_uuid === null || resource_uuid === undefined) {
            throw new Error('Required parameter resource_uuid was null or undefined when calling deleteAssignedResourceFromTraining.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.configuration.basePath}/project/${encodeURIComponent(String(project_uuid))}/training/${encodeURIComponent(String(training_version))}/resource/${encodeURIComponent(String(resource_uuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the corpus of the resource
     * Returns the corpus of the specified resource
     * @param resource_uuid UUID of the resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorpusOfResource(resource_uuid: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getCorpusOfResource(resource_uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getCorpusOfResource(resource_uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getCorpusOfResource(resource_uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (resource_uuid === null || resource_uuid === undefined) {
            throw new Error('Required parameter resource_uuid was null or undefined when calling getCorpusOfResource.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<string>(`${this.configuration.basePath}/resource/${encodeURIComponent(String(resource_uuid))}/corpus`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the corpus of the resource
     * Returns the corpus of the specified resource for this training
     * @param project_uuid UUID of the project
     * @param training_version Training version of the project
     * @param resource_uuid UUID of the resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorpusOfTrainingResource(project_uuid: string, training_version: number, resource_uuid: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getCorpusOfTrainingResource(project_uuid: string, training_version: number, resource_uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getCorpusOfTrainingResource(project_uuid: string, training_version: number, resource_uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getCorpusOfTrainingResource(project_uuid: string, training_version: number, resource_uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (project_uuid === null || project_uuid === undefined) {
            throw new Error('Required parameter project_uuid was null or undefined when calling getCorpusOfTrainingResource.');
        }
        if (training_version === null || training_version === undefined) {
            throw new Error('Required parameter training_version was null or undefined when calling getCorpusOfTrainingResource.');
        }
        if (resource_uuid === null || resource_uuid === undefined) {
            throw new Error('Required parameter resource_uuid was null or undefined when calling getCorpusOfTrainingResource.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<string>(`${this.configuration.basePath}/project/${encodeURIComponent(String(project_uuid))}/training/${encodeURIComponent(String(training_version))}/resource/${encodeURIComponent(String(resource_uuid))}/corpus`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns a list of available resources
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getResource(observe?: 'body', reportProgress?: boolean): Observable<Array<Resource>>;
    public getResource(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Resource>>>;
    public getResource(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Resource>>>;
    public getResource(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Resource>>(`${this.configuration.basePath}/resource`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find resource by UUID
     * Returns a single resource
     * @param resource_uuid UUID of resource to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getResourceByUuid(resource_uuid: string, observe?: 'body', reportProgress?: boolean): Observable<Resource>;
    public getResourceByUuid(resource_uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Resource>>;
    public getResourceByUuid(resource_uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Resource>>;
    public getResourceByUuid(resource_uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (resource_uuid === null || resource_uuid === undefined) {
            throw new Error('Required parameter resource_uuid was null or undefined when calling getResourceByUuid.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Resource>(`${this.configuration.basePath}/resource/${encodeURIComponent(String(resource_uuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns the resource content
     * Returns the resource content
     * @param resource_uuid UUID of resource to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getResourceData(resource_uuid: string, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public getResourceData(resource_uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public getResourceData(resource_uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public getResourceData(resource_uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (resource_uuid === null || resource_uuid === undefined) {
            throw new Error('Required parameter resource_uuid was null or undefined when calling getResourceData.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/pdf',
            'image/png',
            'text/html',
            'text/plain',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'image/jpeg'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.configuration.basePath}/resource/${encodeURIComponent(String(resource_uuid))}/data`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Set the corpus of the resource
     * Updates the corpus of the specified resource
     * @param resource_uuid UUID of the resource
     * @param body New or updated corpus as plain text
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setCorpusOfResource(resource_uuid: string, body: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public setCorpusOfResource(resource_uuid: string, body: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public setCorpusOfResource(resource_uuid: string, body: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public setCorpusOfResource(resource_uuid: string, body: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (resource_uuid === null || resource_uuid === undefined) {
            throw new Error('Required parameter resource_uuid was null or undefined when calling setCorpusOfResource.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling setCorpusOfResource.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/plain'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.configuration.basePath}/resource/${encodeURIComponent(String(resource_uuid))}/corpus`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Set the corpus of the resource
     * Updates the corpus of the specified resource for this training
     * @param project_uuid UUID of the project
     * @param training_version Training version of the project
     * @param resource_uuid UUID of the resource
     * @param body New or updated corpus as plain text
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setCorpusOfTrainingResource(project_uuid: string, training_version: number, resource_uuid: string, body: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public setCorpusOfTrainingResource(project_uuid: string, training_version: number, resource_uuid: string, body: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public setCorpusOfTrainingResource(project_uuid: string, training_version: number, resource_uuid: string, body: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public setCorpusOfTrainingResource(project_uuid: string, training_version: number, resource_uuid: string, body: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (project_uuid === null || project_uuid === undefined) {
            throw new Error('Required parameter project_uuid was null or undefined when calling setCorpusOfTrainingResource.');
        }
        if (training_version === null || training_version === undefined) {
            throw new Error('Required parameter training_version was null or undefined when calling setCorpusOfTrainingResource.');
        }
        if (resource_uuid === null || resource_uuid === undefined) {
            throw new Error('Required parameter resource_uuid was null or undefined when calling setCorpusOfTrainingResource.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling setCorpusOfTrainingResource.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'text/plain'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.configuration.basePath}/project/${encodeURIComponent(String(project_uuid))}/training/${encodeURIComponent(String(training_version))}/resource/${encodeURIComponent(String(resource_uuid))}/corpus`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
