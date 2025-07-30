import React, { useState } from "react";
import { FormLayout } from "../../../Component/common/FormLayout";
import { useOthers } from "../../../hooks/useOthers";

const NewUser = () => {

  const {newUserFields} = useOthers()
 
  return (
    <section className="p-4 w-full">
      <div className="flex flex-wrap gap-[30px]">
        <FormLayout data={newUserFields} />
      </div>    
    </section>
  );
};

export default NewUser;