import { cn, Label } from "@/lib/imports";

interface Props {
  className?: string;
  onClose?: () => void;
  services?: Service[];
}

interface Service {
  title: string;
  icon?: string;
}

export const ServiceCard: React.FC<Props> = ({
  className,
  onClose,
  services,
}) => {
  const displayServices = services?.slice(0, 4) ?? Array(4).fill(null);

  return (
    <section
      className={cn(
        "flex flex-col text-zinc-100 p-3 rounded-xl gap-4 w-full modal-bg",
        className
      )}
    >
      <div className="flex w-full justify-between items-center">
        <Label className="text-lg p-1">Services</Label>
        <button
          className="w-6 h-6 border border-[#ffffff61] flex justify-center items-center rounded-sm cursor-pointer mr-1"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src="/images/x.svg" alt="close" />
        </button>
      </div>

      <div className="relative grid grid-cols-2 grid-rows-2 gap-5 bg-[#110c17] p-4 rounded-lg">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex flex-col justify-around items-center w-[1px] z-0 pointer-events-none">
          <div className="h-36 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent opacity-25" />
          <div className="h-36 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent opacity-25" />
        </div>

        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-25 z-0 pointer-events-none" />

        {displayServices.map((service, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center h-36 outline outline-zinc-700 rounded-sm text-center z-10"
          >
            {service ? (
              <>
                {service.icon && (
                  <img src={service.icon} alt={service.title} className="h-8 w-8" />
                )}
                <span className="ml-2">{service.title}</span>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
