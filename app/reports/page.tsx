import { FileSpreadsheet, ShieldCheck, TimerReset } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MetricCard, PageHeading, Panel, StatusBadge } from "@/components/ui";
import { generatedReports } from "@/lib/mock-data";
import { Download } from "lucide-react";

export default function ReportsPage() {
  return (
    <AppShell>
      <div className="grid gap-6">
        <PageHeading
          eyebrow="Reports"
          title="Past incident reports created by the system"
          description="Historical reports generated automatically after blocked access events, including linked incident, affected user, and export status."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <MetricCard
            label="Generated reports"
            value="03"
            detail="Incident reports created after the access block threshold was exceeded."
            accent={<FileSpreadsheet className="h-5 w-5" />}
          />
          <MetricCard
            label="Automatic generation"
            value="100%"
            detail="All listed reports were created by containment policy, not manual export."
            accent={<ShieldCheck className="h-5 w-5" />}
          />
          <MetricCard
            label="Average generation time"
            value="42 sec"
            detail="Typical delay between access block and completed report artifact."
            accent={<TimerReset className="h-5 w-5" />}
          />
        </div>

        <Panel className="overflow-hidden border p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                Report archive
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Generated incident reports
              </h3>
            </div>
            <StatusBadge tone="normal">Archive healthy</StatusBadge>
          </div>

          <div className="mt-6">
            <Table className="text-left">
              <TableHeader>
                <TableRow>
                  <TableHead>Report</TableHead>
                  <TableHead>Incident</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Export</TableHead>
                  <TableHead>Download</TableHead> {/* NEW */}
                  <TableHead className="pr-0">Status</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {generatedReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-semibold">{report.id}</TableCell>
                    <TableCell>{report.incidentId}</TableCell>
                    <TableCell>{report.user}</TableCell>
                    <TableCell>{report.createdAt}</TableCell>
                    <TableCell className="text-muted">
                      {report.reason}
                    </TableCell>
                    <TableCell>{report.export}</TableCell>

                    {/* DOWNLOAD ICON ONLY */}
                    <TableCell>
                      <button className="p-2 rounded-md hover:bg-muted transition">
                        <Download className="w-4 h-4" />
                      </button>
                    </TableCell>

                    <TableCell className="pr-0">
                      <StatusBadge tone="normal">{report.status}</StatusBadge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
