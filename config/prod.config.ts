/*
 * Copyright (c) 2021 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of My Page.
 *
 * This source code is licensed under the MIT License found in the LICENSE file
 * in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
 */

import { AppConfig } from './config';

const routerRoot = '/brief-personal-landing-page/';

export const prodConfig: AppConfig = {
  routerRoot: routerRoot,
  baseUrl: `https://tobiasbriones.github.io${ routerRoot }`,
  userFile: 'https://raw.githubusercontent.com/tobiasbriones/brief-personal-landing-page/static/user.json'
};
