import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { CountryFormData } from '../../domain/country.schema';
import { useDeleteCountry } from '../../application/usecases/useDeleteCountry';

const CountryActionButtons = ({
  data,
  handleEdit,
}: {
  data: CountryFormData;
  handleEdit: (data: CountryFormData) => void;
}) => {
  const { mutate: deleteCountry, isPending: deletePending } =
    useDeleteCountry();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteCountry({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default CountryActionButtons;
