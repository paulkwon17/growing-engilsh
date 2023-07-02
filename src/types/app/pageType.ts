import { ValueOf } from 'type-fest';

import { PAGE_TYPE } from '@constants/app/page';

export type PageType = ValueOf<typeof PAGE_TYPE>;
