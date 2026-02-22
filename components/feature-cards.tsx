export function FeatureCards({
  dict
}: {
  dict: any;
}) {
  const features = [{
    title: "Share Leftovers",
    description: "Connect with neighbors and share extra food.\nReduce waste, build community bonds.",
    highlighted: true
  }, {
    title: "Clean Together",
    description: "Organize neighborhood cleanups and track\nenvironmental impact with every action.",
    highlighted: false
  }, {
    title: "Local Campaigns",
    description: "Discover and participate in community\nevents and initiatives nearby.",
    highlighted: false
  }];
  return <section className="border-t border-[#a8d583]/30 border-b border-[#a8d583]/30">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
          {features.map((feature, index) => <div key={index} className={`p-6 flex flex-col gap-2 ${feature.highlighted ? "bg-white border border-[#a8d583]/50 shadow-sm" : "border border-[#a8d583]/30"}`}>
              {feature.highlighted && <div className="space-y-1 mb-2">
                  <div className="w-full h-0.5 bg-[#2d5016]/8"></div>
                  <div className="w-32 h-0.5 bg-[#2d5016]"></div>
                </div>}
              <h3 className="text-[#1f3a0c] text-sm font-semibold leading-6">{feature.title}</h3>
              <p className="text-[#2d5016]/80 text-sm leading-[22px] whitespace-pre-line">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}