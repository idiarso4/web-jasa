import PlaceholderPage from "@/components/PlaceholderPage";

export default function Dashboard() {
  return (
    <PlaceholderPage 
      title="Dashboard Klien"
      description="Ringkasan proyek, notifikasi terbaru, dan jadwal milestone untuk klien aktif"
      isAuthenticated={true}
    />
  );
}
