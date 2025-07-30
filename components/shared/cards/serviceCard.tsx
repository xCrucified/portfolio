import { cn, Label } from "@/lib/imports";

interface Props {
  className?: string;
  onClose?: () => void;
  services?: Service[];
}

interface Service {
  title: string;
  description: string;
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
        "flex flex-col text-zinc-100 p-3 rounded-xl gap-4 w-[800px] modal-bg select-none",
        className
      )}
    >
      <div className="flex w-full justify-between items-center">
        <Label className="font-light p-1">Services</Label>
        <button
          className="w-6 h-6 border border-[#ffffff61] flex justify-center items-center rounded-sm cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src="/images/x.svg" draggable={false} alt="close" />
        </button>
      </div>

      <div className="relative grid grid-cols-2 grid-rows-2 gap-5 bg-[#110c17] p-4 rounded-sm">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex flex-col justify-around items-center w-[1px] z-0 pointer-events-none">
          <div className="h-36 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent opacity-25" />
          <div className="h-36 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent opacity-25" />
        </div>

        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-25 z-0 pointer-events-none" />

        {displayServices.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-start items-start h-36 z-10"
          >
            {service ? (
              <>
                {service.icon && (
                  <div className="flex items-center p-2 flex-col icons ml-1 mt-1">
                    <img
                      draggable={false}
                      src={service.icon}
                      alt={service.title}
                      className="h-8 w-8"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-1 p-1 mt-1">
                  <Label className="text-md">{service.title}</Label>
                  <Label className="text-sm opacity-55">
                    {service.description}
                  </Label>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
