import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Admin Dashboard</CardTitle>
          <CardDescription>
            Welcome to your portfolio&apos;s content management panel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            You can edit the content of your portfolio using the links in the
            sidebar. Currently, only the &quot;About Me&quot; section is editable.
            Support for other sections is coming soon.
          </p>
        </CardContent>
      </Card>
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Security Warning</AlertTitle>
        <AlertDescription>
          This admin panel is not password-protected. Please implement
          authentication before deploying your website to a public server to
          prevent unauthorized access.
        </AlertDescription>
      </Alert>
    </div>
  );
}
