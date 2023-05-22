import { Checkbox, Form, Input, InputNumber } from 'antd';
import styles from "./styles.module.scss";
import Button from "@/components/Button";
import { useState } from 'react';

const LeadForm = () => {
const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  
  return (
    <div className={styles.container}>
        <div className={styles.formHeader}>
            <div className={styles.title}>
                Comece seus 10 dias de teste grátis do RD Station Marketing!
            </div>
            <div className={styles.subtitle}>
                Não precisa cadastrar cartão de crédito. 😉
            </div>
        </div>
        
        <Form
            layout='vertical'
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles.form}
        >
            <Form.Item
            label="Diga, qual seu nome?"
            name="name"
            rules={[{ required: true, message: 'Por favor digite seu nome' }]}
            className={styles.item}
            >
            <Input className={styles.input}/>
            </Form.Item>

            <Form.Item
            label="Seu email de trabalho"
            name="email"
            rules={[{ required: true, message: 'Por favor digite seu email!' }]}
            className={styles.item}
            >
            <Input className={styles.input}/>
            </Form.Item>

            <Form.Item
            label="Seu telefone"
            name="phone"
            rules={[{ required: true, message: 'Por favor digite seu telefone!' }]}
            className={styles.item}
            >
            <Input className={styles.input}/>
            </Form.Item>

            <Form.Item
            label="Crie uma senha"
            name="password"
            rules={[{ required: true, message: 'Por favor crie uma senha!' }]}
            className={styles.item}
            >
            <Input.Password className={styles.input}/>
            </Form.Item>

            <Form.Item
            label="Confirme sua senha"
            name="passwordConf"
            rules={[{ required: true, message: 'Por favor confirme sua senha!' }]}
            className={styles.item}
            >
            <Input.Password className={styles.input}/>
            </Form.Item>


            <Form.Item
            className={styles.item}
            label="Qual o site da sua empresa?"
            name="haveSite" valuePropName="checked">
            <Checkbox
                onChange={(e) => setComponentDisabled(e.target.checked)}
            >
                Meu site é
            </Checkbox>
            </Form.Item>

            <Form.Item
            name="siteURL"
            // disabled={componentDisabled}
            className={styles.item}
            >
            <Input className={styles.input}/>
            </Form.Item>

            <Form.Item
            className={styles.item}
            name="noSite" valuePropName="uncheked">
            <Checkbox>Ainda não tenho site</Checkbox>
            </Form.Item>

            <div className={styles.buttonContainer}>
                <Button
                    color="highligh"
                    size="medium"
                    // onClick={() => "submit"}
                    onClick={() => {
                        console.log("cliquei");
                    }}
                    >
                    Criar minha conta
                </Button>
            </div>
        </Form>
    </div>
  );
};

export default LeadForm;
