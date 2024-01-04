import NewArrival from "../data/dashboard/overview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent } from "../ui/tabs";
import { BookOpenText, FileText, ArrowLeftRight, Users } from "lucide-react";

function Dashboard() {
  return (
    <main className="container py-16">
      <main className="border p-1">
        <div className="md:hidden  ">
          <img
            src="/examples/dashboard-light.png"
            width={1280}
            height={866}
            alt="Dashboard"
            className="block dark:hidden"
          />
          <img
            src="/examples/dashboard-dark.png"
            width={1280}
            height={866}
            alt="Dashboard"
            className="hidden dark:block"
          />
        </div>
        <div className="hidden flex-col md:flex">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2 pb-4 gap-2">
              <h2 className="text-4xl font-bold tracking-tight">Dashboard</h2>
              <p className="text-lg text-muted-foreground">
                For this month in your library
              </p>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                      <CardTitle className="text-sm font-medium">
                        Books Added
                      </CardTitle>
                      <BookOpenText className="w-5 h-5" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$45,231.89</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                      <CardTitle className="text-sm font-medium">
                        Issues of Periodicals received:
                      </CardTitle>
                      <FileText className="w-5 h-5" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">+2350</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                      <CardTitle className="text-sm font-medium">
                        No of users visiting the library:
                      </CardTitle>
                      <Users className="w-5 h-5" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">+12,234</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                      <CardTitle className="text-sm font-medium">
                        No of transactions
                      </CardTitle>
                      <ArrowLeftRight className="w-5 h-5" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold">+573</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-10">
                  <Card className="col-span-4 pt-2 pl-2 text-xl">
                    <CardHeader>
                      <CardTitle>New Arrivals</CardTitle>
                      <CardDescription>
                        New things that you might want to check out.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <NewArrival />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3 pt-3">
                    <CardHeader>
                      <CardTitle>Usage Statistics</CardTitle>
                      <CardDescription>
                        You made 265 sales this month.
                      </CardDescription>
                      <CardContent></CardContent>
                    </CardHeader>
                  </Card>

                  <Card className="col-span-3 pt-3">
                    <CardHeader>
                      <CardTitle>Library Activities</CardTitle>
                      <CardDescription>
                        You made 265 sales this month.
                      </CardDescription>
                      <CardContent></CardContent>
                    </CardHeader>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </main>
  );
}
export default Dashboard;
