if($data){
            $name = $data->name;
            /* $slug = $data->slug; */
            $description = $data->description;
            /* $status = $data->status;
            $bar_code = $data->bar_code;
            $sku = $data->sku;
            $comments = $data->comments;
            $size = $data->size;
            $weight = $data->weight;
            $made_in = $data->made_in;
            $brand_id = $data->brand_id;
            $category_id = $data->category_id;
            $unit_id = $data->unit_id; */

            if($name !="" /* && $slug  !="" */ && $description !=""){
                
                $query = 
                    "INSERT INTO 'article' 
                    (name, /*  slug, */ description/* , status, bar_code, sku, comments, size, weight, made_in, brand_id, category_id, unit_id */)
                    values
                    (
                        '$name', 
                        /* '$slug',  */
                        '$description', 
                        /* '$status', 
                        '$bar_code', 
                        '$sku', 
                        '$comments', 
                        '$size', 
                        '$weight', 
                        '$made_in', 
                        '$brand_id', 
                        '$category_id', 
                        '$unit_id' */
                    )";

                $sqlarticle = mysqli_query($conectionDB, $query);

                echo json_encode(["success"=>1]);
            }else{
                echo json_encode(["success"=>0]);
            }
        }else {
            exit("No hay datos");
        }



        /* INSERT INTO `article` (`id`, `name`, `description`) VALUES (NULL, 'leopoldo', 'mendez'); */