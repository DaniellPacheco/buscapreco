export type ProductWhereUniqueInput = {
  provider_id_provider_product_id?: ProviderIdProviderProductIdCompoundUniqueInput | null;
};

export type ProviderIdProviderProductIdCompoundUniqueInput = {
  provider_id: number;
  provider_product_id: string;
};
