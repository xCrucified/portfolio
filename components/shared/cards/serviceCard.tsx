import { Label } from "@/components/ui/label";
import { cn } from "@/lib/imports";

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
        "flex flex-col w-full h-full text-zinc-100 p-3 sm:p-4 overflow-hidden min-h-0 modal-bg select-none",
        className
      )}
    >
      {/* Шапка модалки */}
      <div className="flex w-full justify-between items-center mb-3 shrink-0 px-1">
        <Label className="text-sm font-semibold tracking-widest uppercase text-zinc-400 sm:text-base">
          Services
        </Label>
        {onClose && (
          <button
            className="w-7 h-7 sm:w-8 sm:h-8 border border-white/20 flex justify-center items-center rounded-md cursor-pointer transition-colors hover:bg-white/5"
            onClick={onClose}
            aria-label="Close modal"
          >
            <img src="/images/x.svg" draggable={false} alt="close" className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Рабочая адаптивная сетка */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#110c17]/60 p-3 sm:p-5 rounded-xl border border-white/5 overflow-y-auto custom-scrollbar flex-1 min-h-0">
        
        {displayServices.map((service, idx) => (
          <div
            key={idx}
            className={cn(
              "flex flex-col justify-start items-start p-3 rounded-lg bg-white/[0.02] border border-white/5 min-h-[120px] sm:min-h-0",
              !service && "hidden sm:flex opacity-0 pointer-events-none"
            )}
          >
            {service ? (
              <>
                {service.icon && (
                  <div className="flex items-center justify-center p-2 rounded-md bg-white/5 border border-white/5 mb-2 shrink-0">
                    <img
                      draggable={false}
                      src={service.icon}
                      alt={service.title}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-medium text-zinc-100 truncate w-full">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
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