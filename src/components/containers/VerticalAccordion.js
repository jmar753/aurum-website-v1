import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const VerticalAccordion = () => {
  const [openPanelId, setOpenPanelId] = useState(null);

  const handlePanelClick = (id) => {
    setOpenPanelId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section>
      <div className="flex flex-col lg:flex-row h-fit max-w-6xl overflow-hidden">
        {items.map((item) => (
          <Panel
            key={item.id}
            isOpen={openPanelId === item.id}
            onClick={() => handlePanelClick(item.id)}
            title={item.title}
            links={item.links}
          />
        ))}
        {items2.map((item) => (
          <Panel2
            key={item.id}
            links={item.links}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

const Panel = ({ isOpen, onClick, title, links }) => {
  return (
    <div className="px-4">
      <button
        className="transition-colors py-3 w-full border-b-[1px] flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group hover:text-aurumgreen-600"
        onClick={onClick}
      >
        <span className="block lg:hidden text-2xl font-semibold">{title}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${title}`}
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full h-full overflow-hidden relative flex items-end origin-top"
          >
            <motion.div className="px-4 py-2 gap-y-2 text-lg w-full font-semibold backdrop-blur-sm text-neutral-800 origin-top">
              {links.map((item, index) => (
                <a href={item.link} key={index}>
                  <div className="hover:cursor-pointer hover:text-aurumgreen-600">
                    {item.title}
                  </div>
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Panel2 = ({ title, links }) => {
  return (
    <div className="px-4">
      <a href={links}>
        <button className="transition-colors py-3 w-full border-b-[1px] flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group hover:text-aurumgreen-600">
          <span className="block lg:hidden text-2xl font-semibold">{title}</span>
        </button>
      </a>
    </div>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3 }
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3 }
  },
};

const items = [
  {
    id: 1,
    title: "About",
    links: [
      { title: "About Us", link: "/aboutus" },
      { title: "Our Solutions", link: "/oursolution" },
      { title: "Our History", link: "/ourhistory" }
    ],
  },
  {
    id: 2,
    title: "Catalogue",
    links: [
      { title: "Our Products", link: "/catalogue" },
      { title: "CFC Series", link: "/catalogue/cfc" },
      { title: "DTR Series", link: "/catalogue/dtr" },
      { title: "BTR Series", link: "/catalogue/btr" },
      { title: "MHR Series", link: "/catalogue/mhr" },
      { title: "DDR Series", link: "/catalogue/ddr" }
    ],
  },
];

const items2 = [
  {
    id: 3,
    title: "Blog",
    links: "/blog",
  },
  {
    id: 4,
    title: "Resources",
    links: "/resources",
  },
  {
    id: 5,
    title: "Contact",
    links: "/contactus",
  },
];
