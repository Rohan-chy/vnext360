export interface TenantRequest {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  address: string;
  password: string;
  isApproved: boolean;
}

export interface TenantRequestResponse {
  data: TenantRequest[];
}
