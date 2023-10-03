interface PartDto {
    element_id: string | null;
    id: number;
    inv_part_id: number;
    is_spare: boolean;
    num_sets: number;
    part: {
        name: string;
        part_cat_id: number;
        part_img_url: string;
        part_num: string;
        part_url: string;
        print_of: string;
    };

    quantity: number;
}

export default PartDto;
