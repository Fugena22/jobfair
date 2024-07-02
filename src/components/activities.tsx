import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import SectionHeading from "./section-heading";

export function Activities() {
  return (
    <section id="hoat-dong-chinh">
      <div className="container">
        <div className="flex flex-col items-center">
          <SectionHeading className="mb-10">Các hoạt động chính</SectionHeading>
          <div className="border -lg w-full max-w-3xl mx-auto">
            <div className="relative w-full overflow-auto">
              <Table className="mx-auto max-w-full">
                <TableHeader>
                  <TableRow className="bg-orange-600 border-orange-200">
                    <TableHead className="w-[150px] text-orange-50">
                      Thời gian
                    </TableHead>
                    <TableHead className="text-orange-50">Hoạt động</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-orange-50 border-orange-200">
                  <TableRow>
                    <TableCell>8:00 - 9:00</TableCell>
                    <TableCell>Đón tiếp khách mời & Tham quan</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>9:00 - 9:45</TableCell>
                    <TableCell>Khai mạc Job Fair</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>9:45 - 12:00</TableCell>
                    <TableCell>Networking & Phỏng vấn</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>12:00 - 13:00</TableCell>
                    <TableCell>Nghỉ giải lao</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>13:00 - 15:30</TableCell>
                    <TableCell>Networking & Phỏng vấn</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>16:00</TableCell>
                    <TableCell>Bế mạc</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
