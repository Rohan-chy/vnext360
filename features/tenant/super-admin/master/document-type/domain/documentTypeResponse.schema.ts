export interface DocumentType {
  id: string;
  name: string;
  documentType: number; // 0 = certificate, 1 = exp, 2 = training, 3 = research
}

// Define the structure of the entire data object
export interface DocumentData {
  data: DocumentType[];
}
