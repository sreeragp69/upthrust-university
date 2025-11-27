"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import type { FooterProps, ContactFormData } from "../../types/Footer.type";
import { FOOTER_DATA } from "../../constants/Footer.data";
import Form from "../ui/form/Form";
import Input from "../ui/inputs/Input";
import { Select } from "../ui/inputs/Select";
import Button from "../ui/button/Button";
import FooterSkeleton from "../footer/FooterSkeleton";
import Subscribe from "../Subscribe/Subscribe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AppFooter: React.FC<FooterProps> = ({ isLoading = false }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    email: "",
    phone: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Dropdown state is now handled by the Select component

  if (isLoading) {
    return <FooterSkeleton />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Contact Form:", formData);
    setIsSubmitting(false);
    setFormData({ firstName: "", email: "", phone: "", course: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCourseSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, course: value }));
    // No need to set dropdown open state as it's handled by the Select component
  };

  // Course selection is now handled by the Select component

  return (
    <>
      <div className="h-70 md:h-85 lg:h-52"></div>
      <div
        id="contact-us"
        className="px-4  md:px-0 w-full  lg:pt-[200px] xl:pt-[250px]  bg-white py-6 sm:py-8 md:py-10 lg:py-16 relative"
      >
        <Subscribe />
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-72 sm:mt-80  md:mt-89 lg:mt-0"
        >
          <div className="mx-auto   max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-3xl) 4xl:max-w-(--breakpoint-4xl) grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8">
            <div className="xl:col-span-9 w-full">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8 sm:mb-10 md:mb-12"
              >
                <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                  Let's start together.
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 md:gap-8 lg:gap-12">
                {/* Company Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4 sm:space-y-6 text-center sm:text-left col-span-1 lg:col-span-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <img
                        src={FOOTER_DATA.company.img}
                        alt={FOOTER_DATA.company.alt}
                        className="h-14 sm:h-14 md:h-12 lg:h-16 xl:h-16  w-auto"
                      />
                    </div>
                  </div>
                  <p className="text-xs xs:text-sm sm:text-base  md:text-base  xs:max-w-sm sm:max-w-md font-alexandria text-lightGray">
                    {FOOTER_DATA.company.description}
                  </p>
                </motion.div>

                {/* Footer Links  section */}
                <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-12">
                  {/* Useful Links */}
                  <FooterLinks
                    title={FOOTER_DATA.sections[0].title}
                    items={FOOTER_DATA.sections[0].links.map((link) => ({
                      text: link.label,
                      href: link.href,
                    }))}
                  />

                  {/* Course Category */}
                  <FooterLinks
                    title="Course Category"
                    items={FOOTER_DATA.courses.map((course) => ({
                      text: course.label,
                      href: null,
                    }))}
                  />

                  {/* Contact */}
                  <FooterLinks
                    title="Contact"
                    items={[
                      {
                        text: FOOTER_DATA.contact.phone,
                        href: `tel:${FOOTER_DATA.contact.phone}`,
                        icon: faPhone,
                      },
                      {
                        text: FOOTER_DATA.contact.address.line1,
                        href: null,
                        icon: faLocationDot,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="xl:col-span-3  w-full  lg:scale-90">
              <Form
                heading="Any Enquires"
                onSubmit={handleSubmit}
                className="h-full"
              >
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email ID"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                />

                <Select
                  options={FOOTER_DATA.courses}
                  value={formData.course}
                  onChange={(value) => handleCourseSelect(value)}
                  placeholder="Course"
                  required
                />

                <Button
                  //   disabled={isSubmitting || !formData.course || !formData.firstName || !formData.email || !formData.phone}
                  className="px-6 sm:px-8 md:px-10 w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </Form>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
};

interface FooterLinkItem {
  text: string;
  href: string | null;
  icon?: IconProp;
}

interface FooterLinksProps {
  title: string;
  items: FooterLinkItem[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, items }) => {
  return (
    <div className="space-y-3 sm:space-y-4 text-start sm:text-left px-2">
      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <motion.li
            key={`${item.text}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.4 + index * 0.05,
            }}
            className="flex items-start gap-2 sm:gap-3"
          >
            {item.icon && (
              <FontAwesomeIcon
                icon={item.icon}
                className="w-4 h-4 text-themeGray shrink-0 mt-0.5"
              />
            )}
            {item.href ? (
              <a
                href={item.href}
                className="text-gray-600 font-nunito hover:text-themePrimary transition-colors duration-200 text-sm sm:text-base"
              >
                {item.text}
              </a>
            ) : (
              <span className="text-gray-600 font-nunito text-sm sm:text-base">
                {item.text}
              </span>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default AppFooter;
