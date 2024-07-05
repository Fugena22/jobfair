import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import SectionHeading from "./section-heading";
import BlobWrapper from "./blob-wrapper";

export function Activities() {
  return (
    // <BlobWrapper
    //   blobStyle={{
    //     right: -500,
    //     top: -100,
    //   }}
    // >
    <section id="hoat-dong-chinh">
      <div className="container">
        <div className="flex flex-col items-center">
          <SectionHeading className="mb-10">Các hoạt động chính</SectionHeading>
          <div className="w-full max-w-xl mx-auto">
            <div className="relative w-full">
              <Table className="rounded">
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="w-[150px] ">Thời gian</TableHead>
                    <TableHead>Hoạt động</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="rounded">
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
    // </BlobWrapper>
  );
}
