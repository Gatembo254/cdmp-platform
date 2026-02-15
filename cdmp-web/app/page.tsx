export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">CDMP Platform Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Members Due Today</h2>
          <p className="text-3xl mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Pending Approvals</h2>
          <p className="text-3xl mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Deliveries in Progress</h2>
          <p className="text-3xl mt-2">0</p>
        </div>
      </div>
    </main>
  );
}
