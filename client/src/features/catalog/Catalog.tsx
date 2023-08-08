import { Avatar, Button, List, ListItem, ListItemAvatar } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props){
  return (
    <>
      <List>
      {products.map(product => (
        <ListItem key={product.name}>
          <ListItemAvatar>
            <Avatar src={product.pictureUrl} />
          </ListItemAvatar>
          <ListItemAvatar>
            {product.name} - {product.price}
          </ListItemAvatar>
        </ListItem>
      ))}
      </List>
      <Button variant="contained" onClick={addProduct}>Add product</Button>
    </>
  )
}