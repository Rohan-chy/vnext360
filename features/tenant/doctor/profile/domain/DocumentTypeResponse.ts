export interface DynamicDocumentType {
  id: string;
  name: string;
  documentType: number;
  isActive: boolean;
}

export interface DynamicDocumentTypeResponse {
  dynamicDocumentTypes: DynamicDocumentType[];
}
