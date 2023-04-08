import { PAGE_TYPE } from '@constants/app/pageType';
import { ValueOf } from 'type-fest';

export type pageType = ValueOf<typeof PAGE_TYPE>;
