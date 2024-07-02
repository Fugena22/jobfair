import SectionHeading from "./section-heading";
import { InfiniteMovingCards } from "./shared/infinities-moving-cards";
interface Company {
  name: string;
  url: string;
}

export const companies = [
  { name: "Apple", url: "/placeholder.svg" },
  { name: "Microsoft", url: "/placeholder.svg" },
  { name: "Amazon", url: "/placeholder.svg" },
  { name: "Google", url: "/placeholder.svg" },
  { name: "Facebook", url: "/placeholder.svg" },
  { name: "Tesla", url: "/placeholder.svg" },
  { name: "Netflix", url: "/placeholder.svg" },
  { name: "IBM", url: "/placeholder.svg" },
  { name: "Intel", url: "/placeholder.svg" },
  { name: "Adobe", url: "/placeholder.svg" },
  { name: "Oracle", url: "/placeholder.svg" },
  { name: "Salesforce", url: "/placeholder.svg" },
  { name: "Cisco", url: "/placeholder.svg" },
  { name: "Nvidia", url: "/placeholder.svg" },
  { name: "PayPal", url: "/placeholder.svg" },
  { name: "Adobe", url: "/placeholder.svg" },
  { name: "Uber", url: "/placeholder.svg" },
  { name: "Twitter", url: "/placeholder.svg" },
  { name: "Airbnb", url: "/placeholder.svg" },
  { name: "Spotify", url: "/placeholder.svg" },
  { name: "Dell", url: "/placeholder.svg" },
  { name: "HP", url: "/placeholder.svg" },
  { name: "Sony", url: "/placeholder.svg" },
  { name: "Samsung", url: "/placeholder.svg" },
  { name: "Toyota", url: "/placeholder.svg" },
  { name: "Coca-Cola", url: "/placeholder.svg" },
  { name: "Nike", url: "/placeholder.svg" },
  { name: "McDonald's", url: "/placeholder.svg" },
  { name: "Walmart", url: "/placeholder.svg" },
  { name: "Visa", url: "/placeholder.svg" },
];

function splitCompanies(
  companies: Company[],
  numGroups: number = 3
): Company[][] {
  const result: Company[][] = Array.from({ length: numGroups }, () => []);

  companies.forEach((company, index) => {
    result[index % numGroups].push(company);
  });

  return result;
}

export default function Companies() {
  return (
    <section id="danh-sach-doanh-nghiep">
      <div className="py-14 rounded flex flex-col antialiased  items-center justify-center relative overflow-hidden space-y-10">
        <div className="space-y-6 text-center">
          <SectionHeading>Các doanh nghiệp tham gia</SectionHeading>
          <p className="font-bold text-4xl">
            Tổng cộng 30 công ty tham gia Job Fair
          </p>

          <p className="text-center">
            20 công ty liên doanh đến từ Hàn Quốc <br />
            10 công ty liên doanh Hàn Quốc tại Việt Nam
          </p>
        </div>
        <div className="space-y-2">
          {splitCompanies(companies).map((items, idx) => (
            <InfiniteMovingCards
              key={idx}
              items={items}
              direction={idx % 2 === 0 ? "right" : "left"}
              speed="slow"
              pauseOnHover={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
