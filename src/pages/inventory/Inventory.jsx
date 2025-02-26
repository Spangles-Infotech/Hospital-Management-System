import React from 'react';
import { TableHeader } from '../../Component/common/Table/TableHeader';
import { Table } from '../../Component/common/Table/Table';
import { Pagination } from '../../Component/common/Pagination';
import { useModal } from '../../context/ModalContext';
import { FormModal } from '../../Component/modalContents/FormModal';
import { inventoryFormField, inventoryTableHeading, expensePreviewField } from '../../utils/variable/inventory';
import { useFetchData } from '../../hooks/useFetchData';
import PreviewModal from '../../Component/modalContents/PreviewModal';
import { useDeleteData } from '../../hooks/useDeleteData';

const Inventory = () => {
    const { data, isLoading, error, fetchData: refetch } = useFetchData("/get-all-inventory");
    const { openModal } = useModal();
    const { deleteData, isLoading: isDeleting } = useDeleteData("/delete-inventory");

    const btnData = [
        {
            name: "New Stock",
            onClick: () => { 
                openModal(FormModal, { title: "New Stock", formField: inventoryFormField, refetch, name: "add-inventory" });
            }
        }
    ];

    const actionData = [
        {
            name: "editpenblue",
            onClick: (id) => {
                openModal(PreviewModal, { title: "Stock", previewFields: expensePreviewField }, `/get-inventory/${id}`);
            }
        },
        {
            name: "tabledelete",
            onClick: async (id) => {
                const confirmDelete = window.confirm("Are you sure you want to delete this item?");
                if (confirmDelete) {
                    const status = await deleteData(id);  // ✅ Call delete API directly
                    if (status === 200) {
                        refetch();  // ✅ Refresh inventory after deletion
                    } else {
                        alert("Failed to delete item.");
                    }
                }
            }
        }
    ];

    return (
        <section className='p-4'>
            <TableHeader title={"Inventory"} isBlue={true} buttonData={btnData} />
            <Table tableHead={inventoryTableHeading} tableValue={data} actionData={actionData} isBlue={true} />
            <Pagination />
        </section>
    );
};

export default Inventory;
