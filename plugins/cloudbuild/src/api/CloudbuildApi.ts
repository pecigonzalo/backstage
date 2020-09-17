/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createApiRef } from '@backstage/core';
import {
  ActionsListWorkflowRunsForRepoResponseData,
  ActionsGetWorkflowResponseData,
  ActionsGetWorkflowRunResponseData,
  EndpointInterface,
} from '../api/types';

export const cloudbuildApiRef = createApiRef<CloudbuildApi>({
  id: 'plugin.cloudbuild.service',
  description: 'Used by the Cloudbuild plugin to make requests',
});

export type CloudbuildApi = {
  listWorkflowRuns: ({
    token,
    projectId,
  }: {
    token: string;
    projectId: string;
  }) => Promise<ActionsListWorkflowRunsForRepoResponseData>;
  getWorkflow: ({
    token,
    projectId,
    id,
  }: {
    token: string;
    projectId: string;
    id: string;
  }) => Promise<ActionsGetWorkflowResponseData>;
  getWorkflowRun: ({
    token,
    projectId,
    id,
  }: {
    token: string;
    projectId: string;
    id: string;
  }) => Promise<ActionsGetWorkflowRunResponseData>;
  reRunWorkflow: ({
    token,
    projectId,
    runId,
  }: {
    token: string;
    projectId: string;
    runId: string;
  }) => Promise<any>;
  downloadJobLogsForWorkflowRun: ({
    token,
    projectId,
    runId,
  }: {
    token: string;
    projectId: string;
    runId: string;
  }) => Promise<EndpointInterface>;
};
