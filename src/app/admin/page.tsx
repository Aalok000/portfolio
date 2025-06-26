import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
            sidebar.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
