export interface EventItem {
  id: string;
  hour: string;
  title: string;
  speaker: string;
  place: string;
  type: 'Conferencia' | 'Asesoría' | 'Networking';
  description: string;
}