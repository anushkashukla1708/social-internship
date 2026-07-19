import { IconType } from "react-icons";

type Props = {
  title: string;
  value: number;
  icon?: IconType;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl">

      <div className="flex justify-between">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>

        </div>

        {Icon && (
          <div className="rounded-xl bg-green-100 p-4 text-3xl text-green-700">
            <Icon />
          </div>
        )}

      </div>

    </div>
  );
}