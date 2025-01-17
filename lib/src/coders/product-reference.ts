import type { Properties } from './types';
import type { ProductReference } from '@/types';
import type { Schema } from '@/types/schema';
import { Coder } from './coder';

type Model = ProductReference;
type Serializable = Schema['InOutput.ProductReference'];

export class ProductReferenceCoder extends Coder<Model, Serializable> {
  protected properties: Properties<Model, Serializable> = {
    vendorId: {
      key: 'vendor_product_id',
      required: true,
      type: 'string',
    },
    ios: {
      discountId: {
        key: 'promotional_offer_id',
        required: false,
        type: 'string',
      },
    },
    android: {
      basePlanId: {
        key: 'base_plan_id',
        required: false,
        type: 'string',
      },
      offerId: {
        key: 'offer_id',
        required: false,
        type: 'string',
      },
    },
  };
}
