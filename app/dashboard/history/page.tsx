import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { db } from "@/lib/db";
  import { format } from "date-fns";
  import { currentUser } from "@clerk/nextjs/server";
  
  const History = async () => {

    const user = await currentUser();
    const userId  = user?.id
  
    const userHistory = await db.aIOutput.findMany({
      where: {
        userId: userId as string,
      },
    });
  
    return (
      <div className="mx-5 py-2">
        <div className="mt-5 rounded bg-white px-4 py-6">
          <h1 className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-2xl font-black text-transparent">
          Recent Contents History
          </h1>
        </div>
        <div className="mt-5 rounded bg-white px-4 py-6">
          <Table>
            <TableCaption>List of your content output history.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Template</TableHead>
                <TableHead className="w-[250px]">Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Timestamps</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userHistory && userHistory.length > 0
                ? userHistory.map((history) => (
                    <TableRow key={history.id}>
                      <TableCell>{history.templateUsed}</TableCell>
                      <TableCell className="w-[250px]">{history.title}</TableCell>
                      <TableCell className="whitespace-pre-wrap">
                        {history.description}
                      </TableCell>
                      <TableCell className="text-right">
                        {format(history.createdAt, "MM/dd/yyyy")}
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };
  
  export default History;
