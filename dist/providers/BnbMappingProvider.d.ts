import { MappingProvider } from './MappingProvider';
import { BnbMappedTokenData } from '../constants/types';
export declare class BnbMappingProvider implements MappingProvider {
    provide(): Promise<BnbMappedTokenData>;
}
