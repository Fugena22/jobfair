/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/DaHLnO3hiMT
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export function Activities() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Các hoạt động chính</h2>
      <div className="border rounded-lg w-full max-w-3xl mx-auto">
        <div className="relative w-full overflow-auto">
          <Table className="mx-auto max-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Thời gian</TableHead>
                <TableHead>Hoạt động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
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
  )
}
