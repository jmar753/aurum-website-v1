import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const VerticalAccordion = ({check, setCheck}) => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="">
      <div className="flex flex-col lg:flex-row h-fit w-full max-w-6xl mx-auto overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              title={item.title}
              links={item.links}
              description={item.description}
              setCheck={setCheck}
            />
          );
        })}
        {items2.map((item) => {
          return (
            <Panel2
              key={item.id}
              links={item.links}
              title={item.title}
              setCheck={setCheck}
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, title, description, links, check, setCheck }) => {
  const isOpen = open === id;

  return (
    <div className="px-6">
      <button
        className="transition-colors py-3 w-full border-b-[1px] flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group hover:text-apple-600"
        onClick={() => setOpen(id)}
      >
        <span className="block lg:hidden text-2xl font-semibold">{title}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full h-full overflow-hidden relative flex items-end origin-top"
          >
            <motion.div
              className="px-4 py-2 gap-y-2 text-lg w-full font-semibold backdrop-blur-sm text-neutral-800 origin-top"
            >
              {links.map((item, index) => (
                <NavLink to={item.link} onClick={() => setCheck(false)}>
                  <div className="hover:cursor-pointer hover:text-apple-600">
                    {item.title}
                  </div>
                </NavLink>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Panel2 = ({id, title, links, setCheck }) => {

  return (
    <div className="px-6" key={id}>
      <NavLink to={links} onClick={() => setCheck(false)}>
        <button className="transition-colors py-3 w-full border-b-[1px] flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group hover:text-apple-600">
          <span className="block lg:hidden text-2xl font-semibold">{title}</span>
        </button>
      </NavLink>
    </div>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "auto",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const items = [
  {
    id: 1,
    title: "About",
    links: [{title:"About Us", link:"/aboutus"}, {title:"Our Solutions", link:"/oursolution"}, {title:"Our History", link:"/ourhistory"},],
  },
  {
    id: 2,
    title: "Products",
      links: [{title:"Our Products", link:"aboutus"}, {title:"CFC Series", link:"aboutus"}, {title:"DTR Series", link:"aboutus"}, {title:"BTR Series", link:"aboutus"}, {title:"CFC Series", link:"aboutus"}, {title:"CFC Series", link:"aboutus"},],
  },
];

const items2 = [
  {
    id: 1,
    title: "Blog",
    links: "/blog",
  },
  {
    id: 2,
    title: "Resources",
    links: "/resources",
  },
  {
    id: 3,
    title: "Contact",
    links: "/contactus",
  },
]